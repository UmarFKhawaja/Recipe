import { Anchor, Box, Button, Container, Group, TextInput } from '@mantine/core';
import { Header } from '../../components';
import { useData } from './hooks';
import classes from './styles';
import { Step } from './types';

export function CreateRecipeElement() {
  const {
    form,
    submit,
    addStep,
    removeStep
  } = useData();

  return (
    <>
      <Header/>
      <Container>
        <form onSubmit={form.onSubmit(submit)}>
          <TextInput
            classNames={classes}
            mt="md"
            label="Title"
            placeholder="a pithy name for this recipe"
            {...form.getInputProps('recipe.title')}
          />
          <TextInput
            classNames={classes}
            mt="md"
            label="Description"
            placeholder="an interesting description of this recipe"
            {...form.getInputProps('recipe.description')}
          />
          <Box mt="md">
            <Anchor onClick={addStep}>
              Add a step
            </Anchor>
          </Box>
          {
            form.values.recipe.steps.map((step: Step) => {
              console.log(step);
              console.log(form.getInputProps(`recipe.steps.${step.order}.description`));
              return (
                <Box key={`step-${step.order}`} mt="md">
                  <TextInput
                    classNames={classes}
                    mt="md"
                    label="Description"
                    placeholder="an interesting description of this recipe"
                    {...form.getInputProps(`recipe.step.${step.order}.description`)}
                  />
                  <Box mt="md">
                    <Anchor onClick={() => removeStep(step)}>
                      Remove this step
                    </Anchor>
                  </Box>
                </Box>
              );
            })
          }
          <Group justify="right">
            <Button variant="transparent" mt="md" size="lg" type="submit">
              Save
            </Button>
          </Group>
        </form>
      </Container>
    </>
  );
}
