import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const LoginPage = () => {
  const { classes } = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:5200";
  const router = useRouter();
  const [value, setValue] = useLocalStorage({
    key: "loggedUser",
    defaultValue: "{}",
  });

  const handleLogin = async () => {
    try {
      await fetch(`${url}/User/Login`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      setValue(
        JSON.stringify({
          username,
        })
      );
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Blog Cheese!
        </Title>

        <TextInput
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button
          onClick={handleLogin}
          fullWidth
          mt="xl"
          className="bg-primary/90"
          size="md"
        >
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Link className="bold text-primary/80" href="/register">
            Register
          </Link>
        </Text>
      </Paper>
    </div>
  );
};

export default LoginPage;
