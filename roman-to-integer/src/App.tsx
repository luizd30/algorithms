import { z } from "zod";
import "./App.css";
import { romanToInteger } from "./utils/romanToInteger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const romanRegex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

const schema = z.object({
  roman: z
    .string()
    .min(1, { message: "Must contain at least one Roman character." })
    .regex(romanRegex, { message: "Must be a valid Roman character." }),
});

type SchemeValidationType = z.infer<typeof schema>;

function App() {
  const [roman, setRoman] = useState<number>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SchemeValidationType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: { roman: string }) => {
    const { roman } = data;
    setRoman(romanToInteger(roman));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{roman}</p>
        <div>
          <input
            type="text"
            {...register("roman")}
            onChange={(e) => setValue("roman", e.target.value.toUpperCase())}
          />
          {errors.roman && <p>{errors.roman.message}</p>}
        </div>
        <button type="submit">convert</button>
      </form>
    </>
  );
}

export default App;
