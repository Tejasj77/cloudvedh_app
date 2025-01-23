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

function CompanyProfileForm() {
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
          company_id: '',
          company_name: '',
          company_address: '',
          company_gst_code: '',
          company_pan: '',
          company_phone: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          company_id: Yup.string().required('Company ID is required'),
          company_name: Yup.string().required('Company name is required'),
          company_address: Yup.string().required('Address is required'),
          company_gst_code: Yup.string()
            .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST format')
            .required('GST code is required'),
          company_pan: Yup.string()
            .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format')
            .required('PAN is required'),
          company_phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5">Company Profile</Typography>
              </Grid>
    
              {/* Company ID */}
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company_id">Company ID*</InputLabel>
                  <OutlinedInput
                    id="company_id"
                    value={values.company_id}
                    name="company_id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Company ID"
                    fullWidth
                    error={Boolean(touched.company_id && errors.company_id)}
                  />
                  {touched.company_id && errors.company_id && (
                    <FormHelperText error>{errors.company_id}</FormHelperText>
                  )}
                </Stack>
              </Grid>
    
              {/* Company Name */}
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company_name">Company Name*</InputLabel>
                  <OutlinedInput
                    id="company_name"
                    value={values.company_name}
                    name="company_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    fullWidth
                    error={Boolean(touched.company_name && errors.company_name)}
                  />
                  {touched.company_name && errors.company_name && (
                    <FormHelperText error>{errors.company_name}</FormHelperText>
                  )}
                </Stack>
              </Grid>
    
              {/* Company Address */}
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company_address">Address*</InputLabel>
                  <OutlinedInput
                    id="company_address"
                    value={values.company_address}
                    name="company_address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Company Address"
                    fullWidth
                    multiline
                    rows={3}
                    error={Boolean(touched.company_address && errors.company_address)}
                  />
                  {touched.company_address && errors.company_address && (
                    <FormHelperText error>{errors.company_address}</FormHelperText>
                  )}
                </Stack>
              </Grid>
    
              {/* GST Code */}
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company_gst_code">GST Code*</InputLabel>
                  <OutlinedInput
                    id="company_gst_code"
                    value={values.company_gst_code}
                    name="company_gst_code"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter GST Code"
                    fullWidth
                    error={Boolean(touched.company_gst_code && errors.company_gst_code)}
                  />
                  {touched.company_gst_code && errors.company_gst_code && (
                    <FormHelperText error>{errors.company_gst_code}</FormHelperText>
                  )}
                </Stack>
              </Grid>
    
              {/* PAN */}
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company_pan">PAN*</InputLabel>
                  <OutlinedInput
                    id="company_pan"
                    value={values.company_pan}
                    name="company_pan"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter PAN"
                    fullWidth
                    error={Boolean(touched.company_pan && errors.company_pan)}
                  />
                  {touched.company_pan && errors.company_pan && (
                    <FormHelperText error>{errors.company_pan}</FormHelperText>
                  )}
                </Stack>
              </Grid>
    
              {/* Phone */}
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company_phone">Phone*</InputLabel>
                  <OutlinedInput
                    id="company_phone"
                    value={values.company_phone}
                    name="company_phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    fullWidth
                    error={Boolean(touched.company_phone && errors.company_phone)}
                  />
                  {touched.company_phone && errors.company_phone && (
                    <FormHelperText error>{errors.company_phone}</FormHelperText>
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
                  size="large" 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                >
                  Save Company Profile
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    );
    
    </>)
}
export default CompanyProfileForm;