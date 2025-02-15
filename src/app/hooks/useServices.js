import { enqueueSnackbar } from "notistack";
import { SIP_USER_URLS, IVR_URLS, EXTENSIONS_URL } from "../common/Url";

const useServices = () => {

    const fetchUsersList = async () => {
        try {
          const res = await fetch(SIP_USER_URLS.base);
          const data = await res.json();
          return data;
        } catch (error) {
          enqueueSnackbar(error, { variant: "error" });
        }
      };
    
    const fetchAudioList = async () => {
        try {
          const res = await fetch(IVR_URLS.audio);
          const data = await res.json();
          return data;
        } catch (error) {
          enqueueSnackbar(error, { variant: "error" });
        }
      };

    const fetchMenuList = async () => {
      try {
        const res = await fetch(IVR_URLS.menu);
        const data = await res.json();
        return data;
      } catch (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
    }

    const fetchIvrOptionsList = async () => {
      try {
        const res = await fetch(IVR_URLS.options);
        const data = await res.json();
        return data;
      } catch (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
    }

    const fetchExtensionsList = async () => {
      try {
        const res = await fetch(EXTENSIONS_URL.base);
        const data = await res.json();
        return data;
      } catch (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
    }

    const uploadIvrAudio = async (uploadData) => {
      try {
        const res = await fetch(IVR_URLS.audio, {
          method: "POST",
          body: uploadData,
        });
        const data = await res.json();
        return data;
      } catch (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
    }

    return {
        fetchUsersList,
        fetchAudioList,
        fetchMenuList,
        fetchIvrOptionsList,
        fetchExtensionsList,
        uploadIvrAudio
    }
}

export default useServices;