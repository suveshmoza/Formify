import { GetForms } from '@/actions/form';
import { FormCard } from './FormCard';
import { Form } from '@prisma/client';

export async function FormCards() {
	const forms = await GetForms();
	return (
		<>
			{forms.map((form: Form) => (
				<FormCard key={form.id} form={form} />
			))}
		</>
	);
}
