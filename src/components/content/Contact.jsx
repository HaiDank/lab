import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Container,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
	Checkbox,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

function Contact() {
	const formik = useFormik({
		initialValues: {
			name: '',
			major: 0,
			email: '',
			phone: '',
			message: '',
			agree: false,
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			major: Yup.number().integer().typeError('Please select a major'),
			email: Yup.string().required('Required').email('Invalid email'),
			phone: Yup.number()
				.integer()
				.required('Required')
				.min(10, 'Please enter a valid phone number')
				.typeError('Please enter a valid phone number'),
			message: Yup.string()
				.required('Required')
				.min(10, 'Please enter 10 or more characters'),
			agree: Yup.boolean().oneOf(
				[true],
				'Please accept our terms and conditions'
			),
		}),
	});

	return (
		<Container
			sx={{
				margin: 'auto',
				minHeight: '80vh',
				justifyContent: 'center',
				alignContent: 'center',
				display: 'flex',
			}}
		>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				spacing={{ xs: 2, sm: 4 }}
			>
				<Grid
					item
					xs={12}
					md={4}
					textAlign='center'
					flexGrow={2}
					borderBottom='2px solid transparent'
					paddingBottom='1.2rem'
					sx={{
						borderImage:
							'linear-gradient(to right, transparent, mediumslateblue, transparent)',
						borderImageSlice: '1',
					}}
				>
					<Typography variant='h2'>Contact us</Typography>
					<Typography variant='body1'>
						Any question? Feel free to leave us a message
					</Typography>
				</Grid>
				<Grid item xs={12} md={8}>
					<Card sx={{ padding: '1rem 2rem' }}>
						<CardHeader
							title='Get in touch!'
							subheader='Fill in the form and we will get back to you within 24 hours'
						/>
						<CardContent>
							<form onSubmit={formik.handleSubmit}>
								<Grid
									container
									rowSpacing='1rem'
									columnSpacing='2.5rem'
								>
									<Grid item xs={12} md={6}>
										<TextField
											label='Your name'
											variant='standard'
											sx={{ width: '100%' }}
											name='name'
											value={formik.values.name}
											onChange={formik.handleChange}
										/>
										{formik.errors.name && (
											<Typography variant='caption' color='red'>
												{formik.errors.name}
											</Typography>
										)}
									</Grid>
									<Grid item xs={12} md={6}>
										<FormControl sx={{ width: '100%' }}>
											<TextField
												select
												label='What is your current major?'
												variant='standard'
												sx={{ width: '100%' }}
												name='major'
												value={formik.values.major}
												onChange={formik.handleChange}
											>
												<MenuItem value='' disabled>
													Choose a major
												</MenuItem>
												<MenuItem value={0}>None</MenuItem>
												<MenuItem value={1}>
													Software Engineering
												</MenuItem>
												<MenuItem value={2}>
													Information System
												</MenuItem>
												<MenuItem value={3}>
													Information Assurance
												</MenuItem>
												<MenuItem value={4}>
													Internet of Things
												</MenuItem>
												<MenuItem value={5}>
													Artificial Intelligence
												</MenuItem>
												<MenuItem value={6}>
													Digital Art & Design
												</MenuItem>
											</TextField>
											{formik.errors.major && (
												<Typography variant='caption' color='red'>
													{formik.errors.major}
												</Typography>
											)}
										</FormControl>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
											label='Email'
											variant='standard'
											sx={{ width: '100%' }}
											name='email'
											value={formik.values.email}
											onChange={formik.handleChange}
										/>
										{formik.errors.email && (
											<Typography variant='caption' color='red'>
												{formik.errors.email}
											</Typography>
										)}
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
											label='Phone number'
											variant='standard'
											sx={{ width: '100%' }}
											name='phone'
											value={formik.values.phone}
											onChange={formik.handleChange}
										/>
										{formik.errors.phone && (
											<Typography variant='caption' color='red'>
												{formik.errors.phone}
											</Typography>
										)}
									</Grid>
									<Grid item xs={12}>
										<TextField
											label='Write us a message'
											variant='standard'
											rows='4'
											sx={{ width: '100%' }}
											name='message'
											value={formik.values.message}
											onChange={formik.handleChange}
										/>
										{formik.errors.message && (
											<Typography variant='caption' color='red'>
												{formik.errors.message}
											</Typography>
										)}
									</Grid>
									<Grid item xs={12}>
										<FormControlLabel
											required
											control={<Checkbox />}
											label='Agree to our terms and conditions'
											name='agree'
											value={formik.values.agree}
											onChange={formik.handleChange}
										/>
										{formik.errors.agree && (
											<Typography variant='caption' color='red'>
												{formik.errors.agree}
											</Typography>
										)}
									</Grid>
								</Grid>

								<CardActions sx={{ justifyContent: 'center' }}>
									<Button
										size='medium'
										variant='contained'
										sx={{ textTransform: 'none' }}
										type='submit'
									>
										Send Message
									</Button>
								</CardActions>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Contact;
