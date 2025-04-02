<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

class UserAuthenticateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email_username' => ['required', function ($attribute, $value, $fail) {
                $exists = \App\Models\User::where('email', $value)
                    ->orWhere('username', $value)
                    ->exists();

                if (!$exists) {
                    $fail('Email atau username tidak terdaftar.');
                }
            }],
            'password' => 'required',
        ];
    }

    /**
     * Custom error messsages
     */
    public function messages(): array
    {
        return [
            'email_username.required' => 'Email atau username harus diisi.',
            'password.required' => 'Password harus diisi.',
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $credentials = [
            'password' => $this->password
        ];

        // Check if input is email or username
        $loginType = filter_var($this->email_username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $credentials[$loginType] = $this->email_username;

        if (! Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email_username' => 'Email atau username tidak terdaftar.',
            ]);
        }
    }
}
