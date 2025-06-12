import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function PasswordField({ id, label, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          name={id}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 px-3 py-2 rounded text-gray-800 pr-10"
          required
        />

        {/* Icono de visibilidad dentro del input */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <IconButton onClick={() => setShow(!show)} size="small">
            {show ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
