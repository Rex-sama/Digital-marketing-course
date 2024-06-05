import './globals.css';

export const metadata = {
    title: 'Digital Marketing Course',
    description: 'Register for our comprehensive digital marketing course.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
