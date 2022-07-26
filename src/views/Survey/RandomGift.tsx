import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'components/Image';
import { useEffect, useState } from 'react';
import sample from 'utils/sample';

const gifts: Record<string, string> = {
  1: 'Sổ tay',
  2: 'Cốc',
  3: 'Bình nước',
  4: 'Quạt cầm tay',
  5: 'Đồ ăn',
};

const RandomGift = () => {
  const [giftId, setGiftId] = useState<string | null>(null);

  useEffect(() => {
    const giftId = sample(Object.keys(gifts));
    setGiftId(giftId);
  }, []);

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
      <Fade in>
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
              <Alert severity="success">
                Thông tin của bạn đã được ghi lại!
              </Alert>
              <Typography
                variant="subtitle2"
                sx={{ mt: 3 }}
                gutterBottom
                align="center"
              >
                Cảm ơn bạn đã quan tâm tới thông tin tuyển dụng của Sphinx,
                chúng tôi gửi tặng bạn một món quà nho nhỏ, vui lòng chụp ảnh
                màn hình và đổi quà tại khu vực lễ tân.
              </Typography>
              <Divider variant="middle" light>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                  align="center"
                >
                  from Sphinx with{' '}
                  <Typography component="span" sx={{ color: 'primary.main' }}>
                    ❤
                  </Typography>
                </Typography>
              </Divider>
              <Box
                sx={{
                  display: 'flex',
                  height: 250,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {giftId ? <Typography>{gifts[giftId]}</Typography> : null}
              </Box>
            </Box>
          </Paper>
        </Container>
      </Fade>
    </Box>
  );
};

export default RandomGift;
