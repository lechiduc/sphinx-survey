import { yupResolver } from '@hookform/resolvers/yup';
import LoginIcon from '@mui/icons-material/Login';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ControllerSelect from 'components/Form/ControllerSelect';
import ControllerTextField from 'components/Form/ControllerTextField';
import Form from 'components/Form/Form';
import useMounted from 'hooks/useMounted';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitFormToGoogleSheet } from 'services';
import Regexs from 'utils/Regexs';
import wait from 'utils/wait';
import * as yup from 'yup';

interface FormValue {
  fullName: string;
  yearId: number | null;
  email: string;
  phone: string;
  position: string;
  [key: string]: any;
}

const validationSchema = yup.object().shape({
  fullName: yup.string().trim('schema.trim').required('Bắt buộc').default(''),
  yearId: yup.number().required('Bắt buộc').nullable().default(null),
  email: yup
    .string()
    .trim('schema.trim')
    .required('Bắt buộc')
    .matches(Regexs.email, 'schema.validEmail')
    .email('schema.validEmail')
    .default(''),
  phone: yup
    .string()
    .trim('schema.trim')
    .strict(true)
    .required('Bắt buộc')
    .matches(Regexs.phone, 'schema.onlyNumber')
    .default(''),
  position: yup
    .string()
    .trim('schema.trim')
    .strict(true)
    .required('Bắt buộc')
    .default(''),
});

const SurveyForm = () => {
  const mounted = useMounted();
  const [loading, setLoading] = useState<boolean>(false);
  const [years] = useState([
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
  ]);

  const { control, handleSubmit } = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: validationSchema.getDefault(),
  });

  const onSubmit = async (data: FormValue) => {
    try {
      setLoading(true);
      await wait(1500);
      console.log(data);

      const formData = new FormData();

      for (const field in data) {
        const value = data[field];
        formData.append(field, value);
      }

      const response = await submitFormToGoogleSheet(formData);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      if (mounted.current) {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{
        height: 1,
        backgroundColor: 'background.default',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={16} sx={{ p: 4 }}>
          <Box>
            <Typography variant="h4" gutterBottom align="center">
              Log in
            </Typography>
            <Typography color="text.secondary" variant="body2" align="center">
              Sign in on the internal platform
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <ControllerTextField
                name="fullName"
                control={control}
                label="Họ và tên"
                margin="normal"
                required
              />

              <ControllerSelect
                name="yearId"
                control={control}
                options={years}
                selector={(year) => year.name}
                placeholder="Vui lòng chọn năm học"
                required
              />

              <ControllerTextField
                name="email"
                control={control}
                label="Địa chỉ email"
                margin="normal"
                type="email"
              />

              <ControllerTextField
                name="phone"
                control={control}
                label="Số điện thoại"
                margin="normal"
                required
              />

              <ControllerTextField
                name="position"
                control={control}
                label="Vị trí muốn thực tập, thử việc"
                margin="normal"
                required
              />

              <Box sx={{ mt: 2 }}>
                <LoadingButton
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<LoginIcon />}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Log In
                </LoadingButton>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Alert severity="info">
                  <div>Message here</div>
                </Alert>
              </Box>
            </Form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SurveyForm;
