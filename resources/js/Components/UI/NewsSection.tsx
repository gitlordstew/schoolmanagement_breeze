import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import NewsSlideShow from './NewsSlideShow';

interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: 'academic' | 'sports' | 'events' | 'general';
    image: string;
}

interface NewsSectionProps {
    className?: string;
}

// Sample news data - in a real app, this would come from props or API
const sampleNews: NewsItem[] = [
    {
        id: 1,
        title: "Science Fair Winners Announced",
        excerpt: "Congratulations to all participants in this year's Science Fair! The winners demonstrated exceptional creativity and scientific understanding in their projects.",
        date: "October 8, 2025",
        category: "academic",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Basketball Team Reaches Regional Finals",
        excerpt: "Our varsity basketball team has advanced to the regional finals after a thrilling victory against Central High. The championship game is scheduled for next Friday.",
        date: "October 5, 2025",
        category: "sports",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Winter Concert Preparations Begin",
        excerpt: "The music department is preparing for the annual Winter Concert. Students interested in participating should sign up with the music teacher by October 15th.",
        date: "October 3, 2025",
        category: "events",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop"
    },
    {
        id: 4,
        title: "New Library Resources Available",
        excerpt: "The school library has received new digital resources and study materials. Students can now access online databases and e-books from home using their student accounts.",
        date: "September 30, 2025",
        category: "general",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Drama Club Auditions Next Week",
        excerpt: "The Drama Club will be holding auditions for the spring play 'Romeo and Juliet'. All students are welcome to audition, regardless of experience level.",
        date: "September 28, 2025",
        category: "events",
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop"
    }
];

const NewsSection: React.FC<NewsSectionProps> = ({ className = '' }) => {
    const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'sports' | 'events' | 'general'>('all');

    const filteredNews = activeTab === 'all' 
        ? sampleNews 
        : sampleNews.filter(news => news.category === activeTab);

    const tabs = [
        { key: 'all', label: 'All News', icon: '📰' },
        { key: 'academic', label: 'Academic', icon: '📚' },
        { key: 'sports', label: 'Sports', icon: '⚽' },
        { key: 'events', label: 'Events', icon: '🎉' },
        { key: 'general', label: 'General', icon: '📢' }
    ] as const;

    return (
        <div className={`py-20 bg-gradient-to-b from-blue-50 to-indigo-50 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-900 mb-6 tracking-tight">
                        Student News & Updates
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

                {/* News Slideshow */}
                <div className="max-w-4xl mx-auto mb-12">
                    <NewsSlideShow news={filteredNews} />
                </div>

                {/* Quick News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.slice(0, 6).map((news) => (
                        <div
                            key={news.id}
                            className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-2"
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
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        news.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                                        news.category === 'sports' ? 'bg-green-100 text-green-800' :
                                        news.category === 'events' ? 'bg-purple-100 text-purple-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                                    </span>
                                    <span className="text-xs text-blue-600">{news.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                                    {news.title}
                                </h3>
                                <p className="text-blue-700 text-sm line-clamp-3 leading-relaxed mb-4">
                                    {news.excerpt}
                                </p>
                                <Link 
                                    href="/news"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:translate-x-1 transition-transform duration-200 flex items-center"
                                >
                                    Read More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All News Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/news"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                    >
                        View All News & Updates
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;