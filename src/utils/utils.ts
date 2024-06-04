import slugify from 'slugify';

export const EmailValidator = (email: string) => {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
};

export function SlugTitle(title: string) {
  const slug = slugify(title, {
    replacement: '-',
    lower: true,
    strict: false,
    locale: 'vi',
    trim: true,
  });
  return slug;
}
