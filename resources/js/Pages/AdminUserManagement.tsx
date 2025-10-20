import React, { useState } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusIcon, PencilIcon, TrashIcon, KeyIcon, UserGroupIcon, DocumentArrowDownIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    student_id?: string;
    employee_id?: string;
    birthdate?: string;
    phone?: string;
    grade?: string;
    created_at: string;
    email_verified_at?: string;
    force_password_change: boolean;
    last_password_change?: string;
}

interface Props {
    users: {
        data: User[];
        links: any[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    canCreate: boolean;
    userCounts: {
        total: number;
        students: number;
        teachers: number;
        admins: number;
        moderators: number;
        hr: number;
        registrars: number;
    };
}

export default function AdminUserManagement({ users, canCreate, userCounts }: Props) {
    const [activeTab, setActiveTab] = useState('overview');
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    const { data, setData, post, processing } = useForm({
        action: '',
        selectedUsers: [] as number[],
    });

    const tabs = [
        { id: 'overview', name: 'Overview', icon: UserGroupIcon },
        { id: 'manage', name: 'Manage Users', icon: PencilIcon },
        { id: 'bulk', name: 'Bulk Operations', icon: DocumentArrowUpIcon },
        { id: 'reports', name: 'Reports', icon: DocumentArrowDownIcon },
    ];

    const handleDelete = (user: User) => {
        if (confirm(`Are you sure you want to delete ${user.name}?`)) {
            router.delete(route('user-management.destroy', user.id));
        }
    };

    const handleResetPassword = (user: User) => {
        if (confirm(`Reset password for ${user.name}? They will be required to change it on next login.`)) {
            router.post(route('user-management.reset-password', user.id));
        }
    };

    const getRoleBadgeColor = (role: string) => {
        const colors = {
            admin: 'bg-red-100 text-red-800',
            moderator: 'bg-purple-100 text-purple-800',
            hr: 'bg-blue-100 text-blue-800',
            registrar: 'bg-green-100 text-green-800',
            teacher: 'bg-yellow-100 text-yellow-800',
            student: 'bg-gray-100 text-gray-800',
        };
        return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    const filteredUsers = users.data.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === 'all' || user.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    const renderOverviewTab = () => (
        <div className="space-y-6">
            {/* User Statistics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <UserGroupIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Users</p>
                            <p className="text-2xl font-semibold text-gray-900">{userCounts.total}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <span className="text-green-600 text-xl">🎓</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Students</p>
                            <p className="text-2xl font-semibold text-gray-900">{userCounts.students}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <span className="text-yellow-600 text-xl">👨‍🏫</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Teachers</p>
                            <p className="text-2xl font-semibold text-gray-900">{userCounts.teachers}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <span className="text-red-600 text-xl">👑</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Staff</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                {userCounts.admins + userCounts.moderators + userCounts.hr + userCounts.registrars}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Recent User Activity</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {users.data.slice(0, 5).map((user) => (
                            <div key={user.id} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-medium text-gray-600">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                        <p className="text-xs text-gray-500">{user.role}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-900">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </p>
                                    <p className="text-xs text-gray-500">Created</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderManageTab = () => (
        <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="sm:w-48">
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="all">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="hr">HR</option>
                            <option value="registrar">Registrar</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    {canCreate && (
                        <Link
                            href={route('user-management.create')}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Add User
                        </Link>
                    )}
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-sm font-medium text-gray-600">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                                {user.phone && (
                                                    <div className="text-xs text-gray-400">{user.phone}</div>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(user.role)}`}>
                                            {user.role}
                                        </span>
                                        {user.grade && (
                                            <div className="text-xs text-gray-500 mt-1">Grade: {user.grade}</div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {user.student_id || user.employee_id || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col space-y-1">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                user.email_verified_at 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                                {user.email_verified_at ? 'Verified' : 'Unverified'}
                                            </span>
                                            {user.force_password_change && (
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                                                    Password Change Required
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end space-x-2">
                                            <Link
                                                href={route('user-management.edit', user.id)}
                                                className="text-indigo-600 hover:text-indigo-900 p-1"
                                                title="Edit"
                                            >
                                                <PencilIcon className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleResetPassword(user)}
                                                className="text-yellow-600 hover:text-yellow-900 p-1"
                                                title="Reset Password"
                                            >
                                                <KeyIcon className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user)}
                                                className="text-red-600 hover:text-red-900 p-1"
                                                title="Delete"
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredUsers.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-500">No users found matching your criteria.</div>
                    </div>
                )}
            </div>
        </div>
    );

    const renderBulkTab = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Import Users */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center mb-4">
                        <DocumentArrowUpIcon className="h-6 w-6 text-green-600 mr-2" />
                        <h3 className="text-lg font-medium text-gray-900">Import Users</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        Upload a CSV file to create multiple user accounts at once.
                    </p>
                    <div className="space-y-4">
                        <input
                            type="file"
                            accept=".csv"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                            Import Users
                        </button>
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-800"
                        >
                            Download sample CSV template
                        </a>
                    </div>
                </div>

                {/* Export Users */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center mb-4">
                        <DocumentArrowDownIcon className="h-6 w-6 text-blue-600 mr-2" />
                        <h3 className="text-lg font-medium text-gray-900">Export Users</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        Export user data in various formats for backup or analysis.
                    </p>
                    <div className="space-y-4">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="all">All Users</option>
                            <option value="students">Students Only</option>
                            <option value="teachers">Teachers Only</option>
                            <option value="staff">Staff Only</option>
                        </select>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                Export CSV
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                Export Excel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bulk Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Bulk Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">Reset All Passwords</div>
                        <div className="text-sm text-gray-600">Force all users to change passwords</div>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">Send Welcome Emails</div>
                        <div className="text-sm text-gray-600">Send welcome emails to new users</div>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">Verify All Emails</div>
                        <div className="text-sm text-gray-600">Mark all emails as verified</div>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderReportsTab = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* User Growth Report */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">This Month</span>
                            <span className="text-sm font-medium text-green-600">+12 users</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Last Month</span>
                            <span className="text-sm font-medium text-gray-900">+8 users</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Growth Rate</span>
                            <span className="text-sm font-medium text-green-600">+50%</span>
                        </div>
                    </div>
                </div>

                {/* Role Distribution */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Role Distribution</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Students</span>
                            <span className="text-sm font-medium text-gray-900">{userCounts.students}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Teachers</span>
                            <span className="text-sm font-medium text-gray-900">{userCounts.teachers}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Staff</span>
                            <span className="text-sm font-medium text-gray-900">
                                {userCounts.admins + userCounts.moderators + userCounts.hr + userCounts.registrars}
                            </span>
                        </div>
                    </div>
                </div>

                {/* System Health */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">System Health</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Active Users</span>
                            <span className="text-sm font-medium text-green-600">98.2%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Verified Emails</span>
                            <span className="text-sm font-medium text-green-600">94.1%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Password Changes Due</span>
                            <span className="text-sm font-medium text-orange-600">3 users</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Reports */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Generate Detailed Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">User Activity Report</div>
                        <div className="text-sm text-gray-600">Login frequency and system usage</div>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">Security Report</div>
                        <div className="text-sm text-gray-600">Failed logins and security events</div>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">Role Permissions Report</div>
                        <div className="text-sm text-gray-600">Current role assignments and permissions</div>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <div className="font-medium text-gray-900">System Audit Report</div>
                        <div className="text-sm text-gray-600">Complete system activity audit</div>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        User Management System
                    </h2>
                </div>
            }
        >
            <Head title="Admin User Management" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="mb-6">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                                {tabs.map((tab) => {
                                    const IconComponent = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                                                activeTab === tab.id
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                        >
                                            <IconComponent className="h-5 w-5 mr-2" />
                                            {tab.name}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div>
                        {activeTab === 'overview' && renderOverviewTab()}
                        {activeTab === 'manage' && renderManageTab()}
                        {activeTab === 'bulk' && renderBulkTab()}
                        {activeTab === 'reports' && renderReportsTab()}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}