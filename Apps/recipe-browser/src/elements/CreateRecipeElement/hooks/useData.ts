import { useCallback } from 'react';
import { useForm, UseFormReturnType } from '@mantine/form';
import { CreateRecipeForm, Step } from '../types';

export function useData() {
  const form: UseFormReturnType<CreateRecipeForm> = useForm<CreateRecipeForm>({
    initialValues: {
      recipe: {
        title: '',
        description: '',
        steps: []
      }
    },
    validate: {
      recipe: {
        title: (value: string): boolean => !value,
        description: (value: string): boolean => !value,
        steps: {
          description: (value: string): boolean => !value,
          tasks: {
            description: (value: string): boolean => !value,
            ingredients: {
              description: (value: string): boolean => !value,
              quantity: (value: number): boolean => value >= 0,
              unit: {
                id: (value: string): boolean => !value
              }
            }
          }
        }
      }
    }
  });

  const submit = useCallback(async (values: CreateRecipeForm) => {
    console.log(values);
  }, [form]);

  const addStep = useCallback(() => {
    let steps: Step[] = form.values.recipe.steps;

    const step: Step = {
      order: steps.length,
      description: '',
      tasks: []
    };

    steps = steps.concat([step]);

    form.setFieldValue('recipe.steps', steps);
  }, [form]);

  const removeStep = useCallback((step: Step) => {
    console.log(step);
    let steps: Step[] = form.values.recipe.steps;

    steps = steps
      .filter((_: Step) => _.order !== step.order)
      .map((_: Step, index: number) => ({
        ..._,
        order: index
      }));

    form.setFieldValue('recipe.steps', steps);
  }, [form]);

  return {
    form,
    submit,
    addStep,
    removeStep
  };
}
