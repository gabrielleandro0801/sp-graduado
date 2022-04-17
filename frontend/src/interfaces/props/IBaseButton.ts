export default interface IPrimaryButtonProps {
  variantType: 'text' | 'outlined' | 'contained' | undefined;
  size: 'small' | 'medium' | 'large' | undefined;
  text: string;
  disabled?: boolean;
  materialHref?: string;
}
