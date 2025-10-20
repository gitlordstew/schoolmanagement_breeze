import React, { useState, useEffect } from 'react';

interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: 'academic' | 'sports' | 'events' | 'general';
    image: string;
}

interface NewsSlideShowProps {
    news: NewsItem[];
    autoPlay?: boolean;
    interval?: number;
}

const NewsSlideShow: React.FC<NewsSlideShowProps> = ({
    news,
    autoPlay = true,
    interval = 5000
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (autoPlay && news.length > 1) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % news.length);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, news.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % news.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            academic: 'bg-blue-100 text-blue-800',
            sports: 'bg-green-100 text-green-800',
            events: 'bg-purple-100 text-purple-800',
            general: 'bg-gray-100 text-gray-800'
        };
        return colors[category as keyof typeof colors] || colors.general;
    };

    if (news.length === 0) {
        return (
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 text-center">
                <p className="text-blue-700">No news available at the moment.</p>
            </div>
        );
    }

    const currentNews = news[currentSlide];

    return (
        <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-lg">
            {/* Navigation Arrows */}
            {news.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* News Content */}
            <div className="mx-8">
                {/* Image */}
                <div className="mb-6">
                    <img 
                        src={currentNews.image} 
                        alt={currentNews.title}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentNews.category)}`}>
                        {currentNews.category.charAt(0).toUpperCase() + currentNews.category.slice(1)}
                    </span>
                    <span className="text-sm text-blue-600 font-medium">{currentNews.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{currentNews.title}</h3>
                <p className="text-blue-700 leading-relaxed">{currentNews.excerpt}</p>
            </div>

            {/* Slide Indicators */}
            {news.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {news.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentSlide 
                                    ? 'bg-blue-600 scale-110' 
                                    : 'bg-blue-300 hover:bg-blue-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewsSlideShow;