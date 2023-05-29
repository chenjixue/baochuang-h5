
import { useSearchParams,useNavigate } from "react-router-dom"
import { getWxUserInfo } from "@/apis/public.js"
async function Auth(){
  const [search] = useSearchParams()
  const navigate = useNavigate()
  const code = search.get("code")
  if (code) {
    const res = await getWxUserInfo({
      code
    })
    if (res && res.success && res.result) {
      localStorage.setItem("wxUserInfo", JSON.stringify(res.result))
    }
    const redirectUrl = sessionStorage.getItem("wxRedirectUrl")
    // this.$router.replace(redirectUrl)
    navigate(redirectUrl,{replace:true})
  } else {
    // this.$router.replace("/")
    navigate("/",{replace:true})
  }
} 

export default Auth
