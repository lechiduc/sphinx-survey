import { yupResolver } from '@hookform/resolvers/yup';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import ControllerSelect from 'components/Form/ControllerSelect';
import ControllerTextField from 'components/Form/ControllerTextField';
import Form from 'components/Form/Form';
import FormGroup from 'components/Form/FormGroup';
import FormLabel from 'components/Form/FormLabel';
import Image from 'components/Image';
import useMounted from 'hooks/useMounted';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitFormToGoogleSheet } from 'services';
import Regexs from 'utils/Regexs';
import * as yup from 'yup';
import RandomGift from './RandomGift';

interface FormValue {
  fullName: string;
  yearId: number | null;
  email: string;
  phone: string;
  positionId: number | null;
  [key: string]: any;
}

const sheets: Record<string, string> = {
  fullName: 'Họ và tên',
  yearId: 'Sinh viên năm',
  email: 'Địa chỉ email',
  phone: 'Số điện thoại',
  positionId: 'Vị trí quan tâm',
};

const validationSchema = yup.object().shape({
  fullName: yup.string().trim('').required('Bắt buộc').default(''),
  yearId: yup.number().required('Bắt buộc').nullable().default(null),
  email: yup
    .string()
    .trim('')
    .required('Bắt buộc')
    .matches(Regexs.email, 'Địa chỉ email không hợp lệ')
    .email('Địa chỉ email không hợp lệ')
    .default(''),
  phone: yup
    .string()
    .trim('')
    .required('Bắt buộc')
    .matches(Regexs.phone, 'Số điện thoại không hợp lệ')
    .default(''),
  positionId: yup.number().required('Bắt buộc').nullable().default(null),
});

const SurveyForm = () => {
  const mounted = useMounted();
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const [years] = useState([
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
  ]);

  const [positions] = useState([
    { id: 1, name: 'Lập trình Java' },
    { id: 2, name: 'Lập trình Reactjs' },
    { id: 3, name: 'Lập trình .NET' },
    { id: 4, name: 'Lập trình Mobile' },
    { id: 5, name: 'Business Analyst' },
    { id: 6, name: 'Tester' },
    { id: 7, name: 'Khác' },
  ]);

  const { control, handleSubmit } = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: validationSchema.getDefault(),
  });

  const onSubmit = async (data: FormValue) => {
    try {
      setLoading(true);

      const formData = new FormData();

      for (const field in data) {
        const key = sheets[field];
        const value = data[field];

        if (field === 'positionId') {
          const position = positions.find((position) => position.id === value);
          if (position) {
            formData.append(key, position.name);
          }
        } else {
          formData.append(key, value);
        }
      }

      const response = await submitFormToGoogleSheet(formData);

      if (response.result === 'success') {
        setStep(2);
      } else {
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.log(error);
      setOpenSnackbar(true);
    } finally {
      if (mounted.current) {
        setLoading(false);
      }
    }
  };

  const handleCloseSnackbar = (
    _event: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  if (step === 2) {
    return <RandomGift />;
  }

  return (
    <Box
      sx={{
        height: 1,
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={16}
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: '0px 10px 15px rgba(100, 116, 139, 0.12)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/static/images/SPHINX_Logo_CMYK-02.png"
              sx={{ height: 35 }}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel
                  required
                  title="Họ và tên"
                  name="fullName"
                  gutterBottom
                />
                <ControllerTextField name="fullName" control={control} />
              </FormGroup>
              <FormGroup>
                <FormLabel
                  required
                  title="Bạn đang học năm thứ mấy"
                  name="yearId"
                  gutterBottom
                />
                <ControllerSelect
                  name="yearId"
                  control={control}
                  options={years}
                  selector={(year) => year.name}
                  placeholder="Vui lòng chọn năm học"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel
                  required
                  title="Địa chỉ email"
                  name="email"
                  gutterBottom
                />
                <ControllerTextField
                  name="email"
                  control={control}
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel
                  required
                  title="Số điện thoại"
                  name="phone"
                  gutterBottom
                />
                <ControllerTextField name="phone" control={control} />
              </FormGroup>
              <FormGroup>
                <FormLabel
                  required
                  title="Vị trí muốn thực tập, thử việc"
                  name="positionId"
                  gutterBottom
                />
                <ControllerSelect
                  name="positionId"
                  control={control}
                  options={positions}
                  selector={(year) => year.name}
                  placeholder="Vui lòng chọn vị trí"
                />
              </FormGroup>
              <Box sx={{ mt: 2.5 }}>
                <LoadingButton
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<SendIcon />}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disableElevation
                >
                  Gửi thông tin
                </LoadingButton>
              </Box>
            </Form>
          </Box>
        </Paper>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message="Đã xảy ra lỗi"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default SurveyForm;
