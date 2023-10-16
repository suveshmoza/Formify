import { FC } from 'react';
import { TextFieldFormElement } from './fields/TextField';

export type ElementsType = 'TextField';

export type FormElement = {
	type: ElementsType;

	construct: (id: string) => FormElementInstace;

	designerBtnElement: {
		icon: React.ElementType;
		label: string;
	};

	designerComponent: FC<{
		elementInstance: FormElementInstace;
	}>;
	propertiesComponent: FC<{
		elementInstance: FormElementInstace;
	}>;
	formComponent: FC<{
		elementInstace: FormElementInstace;
	}>;
};

export type FormElementInstace = {
	id: string;
	type: ElementsType;
	extraAttributes?: Record<string, any>;
};

type FormElementsType = {
	[key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
	TextField: TextFieldFormElement,
};
