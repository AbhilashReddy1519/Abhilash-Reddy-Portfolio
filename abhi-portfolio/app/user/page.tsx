import Link from 'next/link';

export default function UserPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center">User Page</h1>
            {/* Add your user page content here */}
            <Link href={'/'}>Home</Link>
        </div>
    );
}




