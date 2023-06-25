import Head from 'next/head'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Container from '@material-ui/core/Container'
import Input from '@material-ui/core/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { register, handleSubmit, formState: { errors }, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1. 名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) =>
                <Input
                  value={value}
                  onChange={onChange}
                // id="name"
                // {...register("name")}
                />}
            />
          </div>

          <div>
            <label htmlFor="birth">Q2. 生年月日を入力してください。（例:19800101）</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) =>
                <Input
                  value={value}
                  onChange={onChange}
                // id="birth"
                //↓inputに入力された値を参照するために使う　↓必須項目　↓文字の形式(正規表現)
                // {...register("birth", { required: true, pattern: /^[0-9]{8}$/ })}
                />}
            />
            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }
          </div>

          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input id="isLearning1"
              {...register("isLearning1", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
            />

            <label htmlFor="isLearning1">はい</label>

            <input id="isLearning2"
              {...register("isLearning2", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">いいえ</label>

            <input id="isLearning3"
              {...register("isLearning3", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning3">わからない</label>

            {errors.birth &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>

          <div>
            <span>Q4. これまでに、プログラミングを学習したことがありますか？</span>

            <input id="wasLearning1"
              {...register("wasLearning1", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="wasLearning1">はい</label>

            <input id="wasLearning2"
              {...register("wasLearning2", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning2">いいえ</label>

            <input id="wasLearning3"
              {...register("wasLearning3", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning3">わからない</label>

            {errors.birth &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>

          <div>
            <label htmlFor="language">Q5. 今まで学習したことのあるプログラミング言語をすべて教えてください。</label>
            <textarea id="language"
              {...register("language")}
              name="language"
            />
          </div>

          <input
            type="submit"
            value="アンケートを提出する"
          ></input>
        </form>
      </Container>
    </>
  )
}
