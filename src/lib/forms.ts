export type FormName = 'contacto' | 'postulacion';

/**
 * Single place where the site's forms are sent.
 * TODO: the site is static and has no form service yet; this only simulates the request.
 * Connect it here (Formspree, Web3Forms, own endpoint…) and every form picks it up.
 */
export async function submitForm(name: FormName, data: FormData): Promise<void> {
  if (import.meta.env.DEV) console.info(`[forms] ${name}`, Object.fromEntries(data));
  await new Promise((resolve) => setTimeout(resolve, 400));
}

/** Basic email check, same rule as the designer's prototype. */
export const isEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value.trim());
