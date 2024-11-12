
import { X } from 'lucide-react';
import {GoogleLogin} from '@react-oauth/google'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import useProfile from '../../store/usProfile';

export default function LoginModal({ onClose }) {


  const [ user, setUser ] = useState([]);
  //const [ profile, setProfile ] = useState(null);
  const setProfile = useProfile((state) => state.setProfile);
  

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
});

useEffect(
  () => {
      if (user) {
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                  console.log(res.data);
                  const data = {
                      email: res.data.email,
                      name: res.data.name,
                      picture: res.data.picture
                  }
                  setProfile(data);
                  onClose()
              })
              .catch((err) => console.log(err));
      }
  },
  [ user ]
);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center py-5 bg-black/50 overflow-y-auto">
      <div className="relative w-full max-w-md p-4 md:h-auto">
        <div className="relative rounded-lg bg-white shadow">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2.5 top-3 ml-auto rounded-lg p-1.5 text-sm text-gray-400 font-montserrat hover:bg-gray-200 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-5">
            <div className="text-center">
              <h2 className="text-xl font-montserrat font-semibold text-slate-900">
                Get Started
              </h2>
              
            </div>

            <div className="mt-7 flex flex-col gap-2">

              
            <button   onClick={()=>login()} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                  className="h-[18px] w-[18px]"
                />
                Continue with Google
              </button>

              

            </div>

            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
              <div className="h-px w-full bg-slate-200" />
              <span>OR</span>
              <div className="h-px w-full bg-slate-200" />
            </div>

            <form className="w-full">
              <div className="space-y-2">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Password"
                  />
                </div>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">
                  Reset your password?
                </a>
              </p>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-black p-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}