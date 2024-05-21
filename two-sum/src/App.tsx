import { useForm } from "react-hook-form";
import "./App.css";
import { bruteForce, hashmap } from "./utils/twoSum";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  target: z
    .string()
    .min(1, { message: "Must be at least 1 character." })
    .regex(/^\d+$/, { message: "Must contain only numbers." }),
  numbers: z.string().regex(/^\d+(,\d+)*$/, {
    message: "Must contain numbers separated by commas without spaces.",
  }),
});

type SchemaType = z.infer<typeof schema>;

type InputType = { bruteforce: number[] | []; hash: number[] | [] };

function App() {
  const [result, setResult] = useState<InputType>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });

  const calculate = (data: SchemaType) => {
    const { target, numbers } = data;

    const targetToNumber = Number(target);
    const numbersToNumber = numbers.split(",").map((number) => Number(number));

    const bruteForceResult = bruteForce(numbersToNumber, targetToNumber);
    const hashmapResult = hashmap(numbersToNumber, targetToNumber);

    setResult({ bruteforce: bruteForceResult, hash: hashmapResult });
  };

  return (
    <>
      <h2>Two Sum</h2>
      <form onSubmit={handleSubmit(calculate)}>
        <label htmlFor="numbers">Numbers</label>
        <input type="text" id="numbers" {...register("numbers")} />
        {errors.numbers && <p>{errors.numbers.message}</p>}
        <label htmlFor="target">Target</label>
        <input type="text" id="target" {...register("target")} />
        {errors.target && <p>{errors.target.message}</p>}
        <button type="submit">calc</button>
      </form>

      <h3>Brute Force Result: </h3>
      {result?.bruteforce.length
        ? JSON.stringify(result.bruteforce)
        : "invalid"}
      <h3>Hash Map Result: </h3>
      {result?.hash.length ? JSON.stringify(result.hash) : "invalid"}
    </>
  );
}

export default App;
