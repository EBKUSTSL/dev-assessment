// "use client"
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
//
// interface FormValues {
//     email: string;
//     password: string;
// }
//
// const LoginForm: React.FC = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
//     const [message, setMessage] = React.useState<string | null>(null);
//     const [messageType, setMessageType] = React.useState<'success' | 'error' | null>(null);
//
//     const onSubmit = async (data: FormValues) => {
//         try {
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });
//
//             const result = await response.json();
//             if (response.ok) {
//                 setMessage(result.message);
//                 setMessageType('success');
//             } else {
//                 setMessage(result.message);
//                 setMessageType('error');
//             }
//         } catch (error) {
//             setMessage('An error occurred');
//             setMessageType('error');
//         }
//     };
//
//
//     return (
//         <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                     <input
//                         type="email"
//                         {...register('email', { required: 'Email is required' })}
//                         className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Password</label>
//                     <input
//                         type="password"
//                         {...register('password', { required: 'Password is required' })}
//                         className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full text-black bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                     Login
//                 </button>
//             </form>
//             {message && (
//                 <div className={`mt-4 p-4 rounded-md text-white ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
//                     {message}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default LoginForm;
"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface FormValues {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [message, setMessage] = React.useState<string | null>(null);
    const [messageType, setMessageType] = React.useState<'success' | 'error' | null>(null);
    const router = useRouter();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await axios.post('/api/login', data);
            if (response.status === 200) {
                setMessage(response.data.message);
                setMessageType('success');
                // Redirect to success page
                router.push('/success');
            } else {
                setMessage(response.data.message);
                setMessageType('error');
            }
        } catch (error: any) {
            setMessage('An error occurred');
            setMessageType('error');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="mt-1 p-2 text-black w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </form>
            {message && (
                <div className={`mt-4 p-4 rounded-md text-white ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default LoginForm;
