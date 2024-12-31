import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { CustomInput } from '@/components/ui/CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <form
			className="flex flex-col gap-3 sm:min-w-[100%]"
		>
			<CustomInput
				type="text"
				id="email"
				placeholder="nomcomplet@email.com"
				label="email"
				width="w-full"
				className={"bg-white"}
				passwordinput={false}
				required={true}
			/>
			<CustomInput
				type="password"
				id="password"
				required={true}
				placeholder="password_label"
				label="password_label"
				width="w-full"
				className="bg-white"
				passwordinput={true}
			/>
			<div className="flex justify-between">
				<div className="flex items-center space-x-2">
					<Checkbox
						id="rememberMe"
					/>
					<label
						htmlFor="terms"
						className="form-label w-fit cursor-pointer text-xs text-forgetPassword"
					>
					 rememberMe
					</label>
				</div>

				<Link
					to="/forgot-password"
					className="form-label w-fit cursor-pointer text-xs text-forgetPassword underline"
				>
					forgot_password
				</Link>
			</div>

			<div className="mt-8 flex w-full flex-col gap-11">
				<Button
					type="submit"
					data-mdb-button-init
					data-mdb-ripple-init
					className="w-full whitespace-nowrap rounded py-2 font-semibold text-white lg:px-40">
                        Login
				</Button>
			</div>
		</form>
  )
}

export default Login