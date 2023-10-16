import { UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';
import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col min-w-full bg-background max-h-screen">
			<nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
				<Logo />
			</nav>
			<main className="flex w-full h-[calc(100vh-60px)] flex-grow items-center justify-center">
				{children}
			</main>
		</div>
	);
}

export default Layout;
