import { Input } from '@/ui/atoms';
import styles from './Form.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useTonConnectUI } from '@tonconnect/ui-react';

interface FormValue {
  amount: number | null;
  recipient: string;
}

const Form = () => {
  const [tonConnectUI] = useTonConnectUI();

  const methods = useForm({
    defaultValues: { amount: 0, recipient: '' },
  });

  const handleFormSubmit = async (data: FormValue) => {
    try {
      if (data?.recipient && data?.amount) {
        const transaction = {
          validUntil: Date.now() + 5 * 60 * 1000,
          messages: [
            {
              address: data.recipient,
              amount: String(Number(data.amount) * Math.pow(10, 9)),
            },
          ],
        };
        await tonConnectUI.sendTransaction(transaction);
        toast.success('Transaction was successful!');
        methods.reset();
      }
    } catch (err) {
      toast.error('Transaction failed');
      console.log(err);
    }
  };

  const amount = methods.watch('amount');

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className={styles.form}
      >
        <Input
          name={'amount'}
          placeholder="Enter amount (TON)"
          type={'number'}
          rules={{
            required: 'This field is required',
            validate: {
              positive: (value) => value > 0 || 'Amount must be greater than 0',
            },
          }}
        />
        <Input
          name={'recipient'}
          placeholder="Enter recipient address"
          type={'text'}
          rules={{ required: 'This field is required' }}
        />
        <button
          type={'submit'}
          disabled={
            !methods.formState.isValid || amount === null || amount <= 0
          }
          className={styles.submit}
        >
          Send
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
