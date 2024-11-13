import { AxiosError } from 'axios';

export type Message = { message: string; code: number };
type ErrorDisplayProps = {
  title?: string;
  errors?: Message[];
  error?: AxiosError;
  inline?: boolean;
};

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ title, errors, error, inline = false }) => {
  if (!error && !errors && !title) {
    return null;
  }
  if (inline) {
    return (
      <div
        data-testid={'error-display-inline'}
        className='relative top-0 right-0 flex items-center justify-between p-1 mt-2 mr-6 text-white bg-red-500 rounded shadow-lg flex-row'
      >
        {title && <div className='text-sm font-bold'>{title}</div>}
        <ErrorList errors={errors} error={error} smallFont={inline} />
      </div>
    );
  }
  return <ErrorDisplayBlock title={title} errors={errors} error={error} />;
};

export const ErrorDisplayBlock: React.FC<ErrorDisplayProps> = ({ title, errors, error }) => {
  return (
    <div
      data-testid={'error-display-block'}
      className='relative top-0 right-0 p-4 my-4 text-white bg-red-500 rounded shadow-lg'
    >
      <div className='flex flex-col'>
        {title && <div className='mb-2 text-lg font-bold'>{title}</div>}
        <ErrorList errors={errors} error={error} />
      </div>
    </div>
  );
};

export const ErrorList = ({
  errors,
  error,
  smallFont = false,
}: {
  errors?: Message[];
  error?: AxiosError;
  smallFont?: boolean;
}) => {
  const errorMessages = errors ?? (error?.response?.data as any)?.errors ?? [];
  if (errorMessages.length === 0) {
    return null;
  }
  return (
    <div data-testid={'error-display-list'} className='flex flex-col break-words'>
      {errorMessages.map((error: Message, index: number) => (
        <div key={`${error.code}${index}`} className={`${smallFont ? 'text-xs' : 'text-base'}`}>
          <strong>Code {error.code}:</strong> {error.message}
        </div>
      ))}
    </div>
  );
};
