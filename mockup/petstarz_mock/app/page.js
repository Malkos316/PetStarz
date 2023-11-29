"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {

    const { user, googleSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => await googleSignIn();

    const handleSignOut = async () => await firebaseSignOut();

    return (
        <main>
            <div className="flex justify-center">
            {user ? (
                <div>
                    <button className="bg-sky-800 text-white font-bold py-2 px-4 rounded m-4 p-2" onClick={handleSignOut}>Sign Out</button>
                    <p className='text-white font-bold hover:text-sky-500'>
                        <Link href="./questionnaire">Questionnaire</Link>
                    </p>
                </div>
                ) : (
                <button className="bg-sky-800 text-white font-bold py-2 px-4 rounded m-4 p-2" onClick={handleSignIn}>Sign In</button>
            )}
            </div>
        </main>
    );
}