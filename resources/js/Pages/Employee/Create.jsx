import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FlashMessage from '@/Components/FlashMessage';
import { usePage } from '@inertiajs/react';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateEmployee = ({ departments }) => {
    const { data, setData, post, errors,processing } = useForm({
        first_name: '',
        last_name: '',
        birth_date: '',
        gender: '',
        hire_date: '',
        department: '',
        img: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //post('/employee');
        post(route('employee.store'), {
            forceFormData: true, // บังคับให้ใช้ FormData
        });
    };

    const { flash } = usePage().props;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const path = URL.createObjectURL(file); 
            data.img = path; // กำหนด path ไปยัง data.img
        }
    };

    return (
        <AuthenticatedLayout

            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Employee
                </h2>
            }>
            <Head title="Create employee" />
            <FlashMessage flash={flash}/>
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <div><h2 className="text-2xl font-bold mb-6"><FontAwesomeIcon icon={faAddressCard} />  Create</h2></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            First Name <label className="text-red-600">*</label>
                        </label>
                        <input
                            type="text"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                            className='shadow appearance-none border rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        {errors.first_name && <div>{errors.first_name}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name <label className="text-red-600">*</label></label>
                        <input
                            type="text"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            className='shadow appearance-none border rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        {errors.last_name && <div>{errors.last_name}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Birth Date <label className="text-red-600">*</label></label>
                        <input
                            type="date"
                            value={data.birth_date}
                            onChange={(e) => setData('birth_date', e.target.value)}
                            className='shadow appearance-none border rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        {errors.birth_date && <div>{errors.birth_date}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gender <label className="text-red-600">*</label></label>
                        <select
                            value={data.gender}
                            onChange={(e) => setData('gender', e.target.value)}
                            className='shadow appearance-none border rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        >
                            <option value="">Select Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        {errors.gender && <div>{errors.gender}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Hire Date <label className="text-red-600">*</label></label>
                        <input
                            type="date"
                            value={data.hire_date}
                            onChange={(e) => setData('hire_date', e.target.value)}
                            className='shadow appearance-none border rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        {errors.hire_date && <div>{errors.hire_date}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Department <label className="text-red-600">*</label></label>
                        <select value={data.dept_no}
                            onChange={(e) => setData('dept_no', e.target.value)}
                            className='shadow appearance-none border rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                            <option value="">Select Department</option>
                            {departments.map((department) => (
                                <option key={department.dept_no} value={department.dept_no}>
                                    {department.dept_name}
                                </option>
                            ))}
                        </select>
                        {errors.department && <div>{errors.department}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image <label className="text-red-600">*</label></label>
                        <input className="shadow w-full text-gray-400 font-semibold text-sm bg-white border border-gray-700 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded-md" type="file" accept="image/*" onChange={handleFileChange} />
                        {errors.img && <div>{errors.img}</div>}
                    </div>
                    <div className="mt-7">
                    <button type="submit" className="w-full bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateEmployee;
