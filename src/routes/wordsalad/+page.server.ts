import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(307, 'https://main--neon-biscotti-34eca0.netlify.app/');
}
