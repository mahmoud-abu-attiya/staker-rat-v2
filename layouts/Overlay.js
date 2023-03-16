import { useSelector, useDispatch } from "react-redux"
import { setOpenMenu } from "../slices/openMenuSlice"

const Overlay = () => {
   const openmenu = useSelector((state) => state.openMenu.value)
   const dispatch = useDispatch()
   return (
      <div onClick={() => dispatch(setOpenMenu(!openmenu))} className='fixed backdrop-blur-sm top-0 left-0 w-full h-screen bg-black/50 z-20'></div>
   )
}

export default Overlay