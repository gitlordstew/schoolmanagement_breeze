export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    role: 'student' | 'parent' | 'teacher' | 'admin' | 'moderator';
    grade?: string;
    class?: string;
    subject?: string;
    phone?: string;
    student_id?: string;
    profile_picture?: string;
    created_at: string;
    updated_at: string;
}

export interface DashboardProps {
    user: User;
    isEmailVerified: boolean;
}

export interface Assignment {
    id: number;
    title: string;
    subject: string;
    dueDate: string;
    status: 'pending' | 'submitted' | 'graded';
    grade?: number;
}

export interface Grade {
    id: number;
    subject: string;
    assignment: string;
    grade: number;
    maxGrade: number;
    date: string;
}

export interface Schedule {
    id: number;
    time: string;
    subject: string;
    teacher: string;
    room: string;
}

export interface Child {
    id: number;
    name: string;
    grade: string;
    class: string;
    overallGrade: number;
    attendance: number;
    recentActivity: string;
}

export interface Class {
    id: number;
    name: string;
    subject: string;
    studentCount: number;
    averageGrade: number;
    nextSession: string;
}

export interface Update {
    id: number;
    type: 'grade' | 'attendance' | 'announcement' | 'assignment';
    title: string;
    description: string;
    date: string;
    child?: string;
    urgent?: boolean;
}