import { useEffect } from 'react';

export const UseDebounce = (effect, deps, delay) => {
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay);

		return () => clearTimeout(handler);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...(deps || []), delay]);
	return null;
};
