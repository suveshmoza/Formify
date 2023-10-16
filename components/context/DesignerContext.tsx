'use client';

import {
	ReactNode,
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';
import { FormElementInstace } from '../FormElements';

type DesignerContext = {
	elements: FormElementInstace[];
	setElements: Dispatch<SetStateAction<FormElementInstace[]>>;
	addElement: (index: number, element: FormElementInstace) => void;
	removeElement: (index: string) => void;
	selectedElement: FormElementInstace | null;
	setSelectedElement: Dispatch<SetStateAction<FormElementInstace | null>>;
	updateElement: (id: string, element: FormElementInstace) => void;
};

export const DesignerContext = createContext<DesignerContext | null>(null);

export default function DesignerContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [elements, setElements] = useState<FormElementInstace[]>([]);

	const [selectedElement, setSelectedElement] =
		useState<FormElementInstace | null>(null);

	const addElement = (index: number, element: FormElementInstace) => {
		setElements((prev) => {
			const newElements = [...prev];
			newElements.splice(index, 0, element);
			return newElements;
		});
	};

	const removeElement = (id: string) => {
		setElements((prev) => prev.filter((element) => element.id !== id));
	};

	const updateElement = (id: string, element: FormElementInstace) => {
		setElements((prev) => {
			const newElements = [...prev];
			const index = newElements.findIndex((el) => el.id === id);
			newElements[index] = element;
			return newElements;
		});
	};

	return (
		<DesignerContext.Provider
			value={{
				elements,
				setElements,
				addElement,
				removeElement,
				selectedElement,
				setSelectedElement,
				updateElement,
			}}
		>
			{children}
		</DesignerContext.Provider>
	);
}
