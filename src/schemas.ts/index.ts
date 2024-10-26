import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    FullName: Yup.string().required('Vui lòng điền tên'),
    CCCD: Yup.string().required('Vui lòng điền CCCD'),
    Phone: Yup.string().required('Vui lòng điền số điện thoại'),
    Email: Yup.string().required('Vui lòng điền email').email('Email không đúng định dạng'),
    DateOfBirth: Yup.string().required('Vui lòng điền ngày sinh'),
    Address: Yup.string().required('Vui lòng điền địa chỉ'),
});

export default registerSchema;
