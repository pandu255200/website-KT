'use client';

import AnalyticsKart from '../../../../../public/products-kart/analytics.svg';
import { ProductsKartSlider } from '@/components/layout/products-kart';

const facegenieData = [
    {
        id: 1,
        title: 'Truck Dock Management',
        description:
            'Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.',
        image: AnalyticsKart,

    },
    {
        id: 2,
        title: 'Asset Management',
        description:
            'Streamline asset operations with our comprehensive management tools. Real-time tracking and reporting simplify maintenance, reduce downtime, and enhance operational efficiency.',
        image: AnalyticsKart,

    },
    {
        id: 3,
        title: 'Gen AI Led Chatbot',
        description:
            'Leverage AI-driven chatbots to enhance customer interactions. Our technology ensures faster response times, increased accuracy, and improved user satisfaction.',
        image: AnalyticsKart,

    },
];


export default function AnalyticsKartSlider() {
    return (
        <>
            <ProductsKartSlider data={facegenieData} pageTitle='FACEGENIE' />
        </>
    )
}
