import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required('nhập title'),
});

TodoForm.propTypes = {
    onsubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title:'',
        },
        resolver:yupResolver(schema),
    })

    const handleSubmit = (values) => {
        console.log("Todo Form: ", values)
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="todo" form={form}/>
        </form>
    );
}

export default TodoForm;