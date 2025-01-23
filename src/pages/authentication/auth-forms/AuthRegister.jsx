import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthRegister() {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <Formik
      initialValues={{
        hsnCode: '',
        article: '',
        color: '',
        size: '',
        qty: '',
        mrp: '',
        rate: '',
        gst: '',
        amount: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        hsnCode: Yup.string().required('HSN Code is required'),
        article: Yup.string().required('Article is required'),
        color: Yup.string().required('Color is required'),
        size: Yup.string().required('Size is required'),
        qty: Yup.number()
          .typeError('Quantity must be a number')
          .required('Quantity is required')
          .positive('Quantity must be positive'),
        mrp: Yup.number()
          .typeError('MRP must be a number')
          .required('MRP is required')
          .positive('MRP must be positive'),
        rate: Yup.number()
          .typeError('Rate must be a number')
          .required('Rate is required')
          .positive('Rate must be positive'),
        gst: Yup.number()
          .typeError('GST must be a number')
          .required('GST is required')
          .min(0, 'GST cannot be negative')
          .max(100, 'GST cannot exceed 100%'),
        amount: Yup.number()
          .typeError('Amount must be a number')
          .required('Amount is required')
          .positive('Amount must be positive')
      })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* HSN Code */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="hsnCode">HSN Code*</InputLabel>
                <OutlinedInput
                  id="hsnCode"
                  type="text"
                  value={values.hsnCode}
                  name="hsnCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter HSN Code"
                  fullWidth
                  error={Boolean(touched.hsnCode && errors.hsnCode)}
                />
                {touched.hsnCode && errors.hsnCode && (
                  <FormHelperText error>{errors.hsnCode}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* Article */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="article">Article*</InputLabel>
                <OutlinedInput
                  id="article"
                  type="text"
                  value={values.article}
                  name="article"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Article"
                  fullWidth
                  error={Boolean(touched.article && errors.article)}
                />
                {touched.article && errors.article && (
                  <FormHelperText error>{errors.article}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* Color */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="color">Color*</InputLabel>
                <OutlinedInput
                  id="color"
                  type="text"
                  value={values.color}
                  name="color"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Color"
                  fullWidth
                  error={Boolean(touched.color && errors.color)}
                />
                {touched.color && errors.color && (
                  <FormHelperText error>{errors.color}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* Size */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="size">Size*</InputLabel>
                <OutlinedInput
                  id="size"
                  type="text"
                  value={values.size}
                  name="size"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Size"
                  fullWidth
                  error={Boolean(touched.size && errors.size)}
                />
                {touched.size && errors.size && (
                  <FormHelperText error>{errors.size}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* Quantity */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="qty">Quantity*</InputLabel>
                <OutlinedInput
                  id="qty"
                  type="number"
                  value={values.qty}
                  name="qty"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Quantity"
                  fullWidth
                  error={Boolean(touched.qty && errors.qty)}
                />
                {touched.qty && errors.qty && (
                  <FormHelperText error>{errors.qty}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* MRP */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="mrp">MRP*</InputLabel>
                <OutlinedInput
                  id="mrp"
                  type="number"
                  value={values.mrp}
                  name="mrp"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter MRP"
                  fullWidth
                  error={Boolean(touched.mrp && errors.mrp)}
                />
                {touched.mrp && errors.mrp && (
                  <FormHelperText error>{errors.mrp}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* Rate */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="rate">Rate*</InputLabel>
                <OutlinedInput
                  id="rate"
                  type="number"
                  value={values.rate}
                  name="rate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Rate"
                  fullWidth
                  error={Boolean(touched.rate && errors.rate)}
                />
                {touched.rate && errors.rate && (
                  <FormHelperText error>{errors.rate}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* GST */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="gst">GST (%)*</InputLabel>
                <OutlinedInput
                  id="gst"
                  type="number"
                  value={values.gst}
                  name="gst"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter GST"
                  fullWidth
                  error={Boolean(touched.gst && errors.gst)}
                />
                {touched.gst && errors.gst && (
                  <FormHelperText error>{errors.gst}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {/* Amount */}
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="amount">Amount*</InputLabel>
                <OutlinedInput
                  id="amount"
                  type="number"
                  value={values.amount}
                  name="amount"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Amount"
                  fullWidth
                  error={Boolean(touched.amount && errors.amount)}
                />
                {touched.amount && errors.amount && (
                  <FormHelperText error>{errors.amount}</FormHelperText>
                )}
              </Stack>
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
    </>
  );
}
