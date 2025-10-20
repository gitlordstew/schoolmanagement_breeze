import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/Components/UI';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    excerpt: string;
    date: string;
    category: 'academic' | 'sports' | 'events' | 'general';
    image: string;
    author?: string;
    readTime?: string;
}

// Sample news data with images
const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Science Fair Winners Announced",
        description: "Congratulations to all participants in this year's Science Fair! The winners demonstrated exceptional creativity and scientific understanding in their projects. This year's theme focused on environmental sustainability and renewable energy solutions. Over 150 students participated, showcasing innovative projects ranging from solar-powered devices to biodegradable materials research. The first-place winner, Sarah Chen from Grade 11, presented a revolutionary water purification system using natural materials.",
        excerpt: "Congratulations to all participants in this year's Science Fair! The winners demonstrated exceptional creativity and scientific understanding.",
        date: "October 8, 2025",
        category: "academic",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
        author: "Dr. Smith",
        readTime: "3 min read"
    },
    {
        id: 2,
        title: "Basketball Team Reaches Regional Finals",
        description: "Our varsity basketball team has advanced to the regional finals after a thrilling victory against Central High. The championship game is scheduled for next Friday at 7 PM in the school gymnasium. The team showed incredible teamwork and determination throughout the season, with standout performances from captain Mike Johnson and star player Lisa Rodriguez. Coach Thompson praised the team's dedication and countless hours of practice that led to this achievement. All students and families are invited to attend and support our Eagles!",
        excerpt: "Our varsity basketball team has advanced to the regional finals after a thrilling victory against Central High.",
        date: "October 5, 2025",
        category: "sports",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
        author: "Coach Thompson",
        readTime: "2 min read"
    },
    {
        id: 3,
        title: "Winter Concert Preparations Begin",
        description: "The music department is preparing for the annual Winter Concert, scheduled for December 15th. Students interested in participating should sign up with the music teacher by October 15th. This year's concert will feature a diverse program including classical pieces, contemporary songs, and holiday favorites. The school choir, band, and orchestra will all perform, with special solo performances by talented students. Auditions for solo parts will be held next week. The concert promises to be a magical evening showcasing the incredible musical talent of our students.",
        excerpt: "The music department is preparing for the annual Winter Concert. Students interested in participating should sign up by October 15th.",
        date: "October 3, 2025",
        category: "events",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
        author: "Ms. Anderson",
        readTime: "4 min read"
    },
    {
        id: 4,
        title: "New Library Resources Available",
        description: "The school library has received new digital resources and study materials. Students can now access online databases and e-books from home using their student accounts. The new resources include academic journals, research databases, interactive learning platforms, and thousands of digital books across all subjects. Librarian Mrs. Wilson will be conducting training sessions next week to help students navigate these new resources effectively. These additions significantly expand our learning resources and support students' academic success.",
        excerpt: "The school library has received new digital resources and study materials accessible from home.",
        date: "September 30, 2025",
        category: "general",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
        author: "Mrs. Wilson",
        readTime: "3 min read"
    },
    {
        id: 5,
        title: "Drama Club Auditions Next Week",
        description: "The Drama Club will be holding auditions for the spring play 'Romeo and Juliet'. All students are welcome to audition, regardless of experience level. Auditions will take place in the school auditorium from October 18-20, with callback auditions on October 22nd. Director Mr. Parker encourages all interested students to prepare a 2-minute monologue of their choice. The production will run for four nights in March, providing an excellent opportunity for students to develop their acting skills and gain confidence performing in front of an audience.",
        excerpt: "The Drama Club will be holding auditions for the spring play 'Romeo and Juliet'. All students welcome to audition.",
        date: "September 28, 2025",
        category: "events",
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop",
        author: "Mr. Parker",
        readTime: "2 min read"
    },
    {
        id: 6,
        title: "Student Art Exhibition Opens",
        description: "The annual Student Art Exhibition is now open in the main hallway gallery. This year's exhibition features over 60 pieces from students across all grade levels, showcasing work in various mediums including painting, sculpture, photography, and digital art. The exhibition will remain open through the end of October, with an opening reception scheduled for October 20th at 6 PM. Art teacher Ms. Rodriguez highlighted the exceptional creativity and skill demonstrated by this year's participants. The community is invited to view these inspiring works.",
        excerpt: "The annual Student Art Exhibition is now open, featuring over 60 pieces from students across all grade levels.",
        date: "September 25, 2025",
        category: "academic",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=400&fit=crop",
        author: "Ms. Rodriguez",
        readTime: "3 min read"
    }
];

export default function News({ auth }: PageProps) {
    const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'sports' | 'events' | 'general'>('all');
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

    const filteredNews = activeTab === 'all' 
        ? newsData 
        : newsData.filter(news => news.category === activeTab);

    const tabs = [
        { key: 'all', label: 'All News', icon: '📰' },
        { key: 'academic', label: 'Academic', icon: '📚' },
        { key: 'sports', label: 'Sports', icon: '⚽' },
        { key: 'events', label: 'Events', icon: '🎉' },
        { key: 'general', label: 'General', icon: '📢' }
    ] as const;

    const getCategoryColor = (category: string) => {
        const colors = {
            academic: 'bg-blue-100 text-blue-800',
            sports: 'bg-green-100 text-green-800',
            events: 'bg-purple-100 text-purple-800',
            general: 'bg-gray-100 text-gray-800'
        };
        return colors[category as keyof typeof colors] || colors.general;
    };

    if (selectedNews) {
        return (
            <>
                <Head title={`${selectedNews.title} - SchoolName News`} />
                
                {/* Header */}
                <header className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-sm border-b border-blue-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            <div className="flex items-center space-x-6">
                                <Link href="/" className="flex items-center space-x-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-blue-900 tracking-tight">SchoolName</h1>
                                        <p className="text-sm text-blue-700 font-medium">News</p>
                                    </div>
                                </Link>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <Button onClick={() => setSelectedNews(null)} variant="ghost" size="md">
                                    ← Back to News
                                </Button>
                                {auth.user ? (
                                    <Button href={route('dashboard')} variant="primary" size="md">
                                        Dashboard
                                    </Button>
                                ) : (
                                    <Button href={route('login')} variant="primary" size="md">
                                        Login
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                            {/* Article Image */}
                            <div className="h-96 overflow-hidden">
                                <img 
                                    src={selectedNews.image} 
                                    alt={selectedNews.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Article Content */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedNews.category)}`}>
                                        {selectedNews.category.charAt(0).toUpperCase() + selectedNews.category.slice(1)}
                                    </span>
                                    <div className="flex items-center space-x-4 text-sm text-blue-600">
                                        <span>{selectedNews.date}</span>
                                        {selectedNews.author && <span>By {selectedNews.author}</span>}
                                        {selectedNews.readTime && <span>{selectedNews.readTime}</span>}
                                    </div>
                                </div>
                                
                                <h1 className="text-4xl font-bold text-blue-900 mb-6">{selectedNews.title}</h1>
                                <div className="prose prose-blue max-w-none">
                                    <p className="text-lg text-blue-700 leading-relaxed">{selectedNews.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        );
    }

    return (
        <>
            <Head title="News - SchoolName" />
            
            {/* Header */}
            <header className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-sm border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-6">
                            <Link href="/" className="flex items-center space-x-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-blue-900 tracking-tight">SchoolName</h1>
                                    <p className="text-sm text-blue-700 font-medium">News & Updates</p>
                                </div>
                            </Link>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Button href={route('dashboard')} variant="primary" size="md">
                                    Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button href={route('login')} variant="primary" size="md">
                                        Login
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* News Page Content */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-900 mb-6 tracking-tight">
                            School News & Updates
                        </h2>
                        <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                            Stay informed with the latest school news, events, and achievements
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center mb-12 gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 ${
                                    activeTab === tab.key
                                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                        : 'bg-white/70 text-blue-700 hover:bg-blue-100 hover:text-blue-800 shadow-md hover:shadow-lg'
                                }`}
                            >
                                <span className="text-lg">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((news) => (
                            <article
                                key={news.id}
                                className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                                onClick={() => setSelectedNews(news)}
                            >
                                {/* News Image */}
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={news.image} 
                                        alt={news.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                
                                {/* News Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                                            {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                                        </span>
                                        <span className="text-xs text-blue-600">{news.date}</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                                        {news.title}
                                    </h3>
                                    
                                    <p className="text-blue-700 text-sm line-clamp-3 leading-relaxed mb-4">
                                        {news.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                        {news.author && (
                                            <span className="text-xs text-blue-600">By {news.author}</span>
                                        )}
                                        {news.readTime && (
                                            <span className="text-xs text-blue-500">{news.readTime}</span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}