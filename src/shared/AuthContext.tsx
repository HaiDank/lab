import React, { useState } from 'react';

export type AuthUser = {
	name: string;
	email: string;
	picture: string;
};

type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type AuthContextProps = {
	children: React.ReactNode;
};

const AuthContext = React.createContext<UserContextType | null>(null);

const AuthContextProvider = ({ children }: AuthContextProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContextProvider, AuthContext };
