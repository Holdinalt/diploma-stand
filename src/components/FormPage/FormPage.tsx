import { Form, Button } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';

export const FormPage = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().matches(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    });

    return (
        <Formik
            initialValues={{
            email: '',
            password: ''
        }}
            onSubmit={console.log}
            validationSchema={schema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            Password is Invalid
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            Please provide a password with letters and at least one number.
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    )
}
