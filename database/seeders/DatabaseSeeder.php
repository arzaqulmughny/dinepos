<?php

namespace Database\Seeders;

use App\Models\Setting;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create developer user
        User::firstOrCreate([
            'username' => 'developer',
        ], [
            'name' => 'Developer',
            'email' => 'developer@demo.com',
            'password' => Hash::make('demo'),
            'role' => 'developer',
        ]);

        // Create default setting
        Setting::firstOrCreate([
            'key' => 'company_name',
        ], [
            'default_value' => 'DineResto',
        ]);
    }
}
