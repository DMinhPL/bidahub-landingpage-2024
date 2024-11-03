import * as Yup from 'yup';

export const registerSchemaVi = Yup.object().shape({
    FullName: Yup.string().required('Vui lòng điền tên'),
    CCCD: Yup.string().required('Vui lòng điền CCCD'),
    Phone: Yup.string().required('Vui lòng điền số điện thoại'),
    Email: Yup.string().email('Email không đúng định dạng'),
    DateOfBirth: Yup.string().required('Vui lòng điền ngày sinh'),
    Address: Yup.string().required('Vui lòng điền địa chỉ'),
});

export const registerSchemaEn = Yup.object().shape({
    FullName: Yup.string().required('Please enter your full name'),
    CCCD: Yup.string().required('Please enter your identification number'),
    Phone: Yup.string().required('Please enter your phone number'),
    Email: Yup.string().email('Invalid email format'),
    DateOfBirth: Yup.string().required('Please enter your date of birth'),
    Address: Yup.string().required('Please enter your address'),
});
export const registerSchema = Yup.object().shape({
    FullName: Yup.string().required('Please enter your full name'),
    CCCD: Yup.string().required('Please enter your identification number'),
    Phone: Yup.string().required('Please enter your phone number'),
    Email: Yup.string().email('Invalid email format'),
    DateOfBirth: Yup.string().required('Please enter your date of birth'),
    Address: Yup.string().required('Please enter your address'),
});
export default registerSchema;
