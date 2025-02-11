import React, { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IoLogoAppleAr } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { GoogleIcon } from '../../assets/icons/GoogleIcon';
import { TwitterIcon } from '../../assets/icons/TwitterIcon';
import { Button } from '../../components/Buttons/Button';
import { InputField } from '../../components/InputField/InputField';
import { toast } from 'react-toastify';
import { handleLogin } from '../../Utils';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const extractedEmail = email.split('@')[0]; 
      toast.success(`Welcome back ${extractedEmail}`, {
        hideProgressBar: true,
        autoClose: 2000,
        closeOnClick: true,
        progress: undefined
      })
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFFF0]">
      <div className="w-[unset] rounded-2xl bg-white p-8 shadow-lg md:w-[33%] md:px-[4%] md:py-[60px]">
        <div className="flex justify-center pb-[10px] text-[32px]">
          <IoLogoAppleAr />
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-[24px] font-semibold">Sign In</h2>
          <p className="mt-[0px] text-[12px] text-gray-500">
            Empowering E-Commerce with Insights.
          </p>
          <p className="text-[12px] text-gray-500">That Drive Success</p>
        </div>

        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={{
            icon: showPassword ? <FiEye /> : <FiEyeOff />,
            onClick: () => setShowPassword(!showPassword),
          }}
        />

        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

        <Button
          onClick={() => handleLogin(email, password, setError, login, navigate)}
          disabled={password.length < 6}
          className={`text-white ${
            password.length < 6 ? 'cursor-not-allowed bg-gray-400' : 'bg-[#006D5B]'
          }`}
        >
          Sign In
        </Button>

        <div className="mt-4 flex flex-col space-y-2">
          <Button onClick={() => {}} className="bg-gray-50" icon={<GoogleIcon />}>
            Sign In with Google
          </Button>
          <Button onClick={() => {}} className="bg-gray-50" icon={<TwitterIcon />}>
            Sign In with Twitter  
          </Button>
        </div>

        <p className="mt-4 text-center text-[14px] text-gray-500">
          Already have an account?{' '}
          <a href="/signup" className="px-[6px] font-[500] text-green-700">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
