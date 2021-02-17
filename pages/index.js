import { Button, Heading, Text, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

export default function Home() {
	const auth = useAuth();

	return (
		<div>
			<main>
				<Heading as="h1" fontSize="6xl">
					Fast Feedback
				</Heading>

				{!auth?.user && (
					<Button onClick={(e) => auth.signinWithGithub()}>Sign in</Button>
				)}
				{auth?.user && (
					<>
						<Text>
							Current User: <Code>{auth?.user?.email}</Code>
						</Text>
						<Button onClick={(e) => auth.signout()}>Sign Out</Button>
					</>
				)}
			</main>
		</div>
	);
}
