import { METHODS } from "http";
import * as conf from "./Config";

const getResult = (
  url,
  method = "GET",
  data: any = null,
  success = (response: any) => { },
  failed = (error: any) => { }
) => {
  let parameters: any = {};
  parameters.method = method;
  if (data) {
    parameters.body = data;
  }
  parameters.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    fetch(conf.apiUrl + url, parameters)
      .then((response) => response.json())
      .then((res) => {
        success(res);
      })
      .catch((error) => {
        failed(error);
      });
  } catch (error) {
    failed(error);
  }
};
export const signin = (
  userName,
  password,
  success = (response: any) => { },
  failed = (error: any) => { }
) => {
  if (!userName || !password) {
    failed("not found");
    return;
  }


  success({ id: "941sdd55assa522", token: "dsfscddvdfvdvdvfdve51ds16ds" });
  const formData = new FormData();
  formData.append("username", userName);
  formData.append("password", password);
  getResult("/user-login", "POST", formData, (response) => {
    if (response.status === 200) {
      success(response);
    } else {
      failed(response);
    }
  });
};


export const getUserprofile =(success = (response: any) => { },
  failed = (error: any) => { }) => {
  getResult("/user-register", "GET", null, (response) => {
    success(response);
  }, (error) => { failed(error); })
}

export const getDonatedetails =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/donation", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const gettopslider =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getGallery =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/donationgallery", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getFaq =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/faq", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getweare =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/aboutdata", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }


export const getVolunteer =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/volunteer", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }


export const getContact =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/contact", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getDriverDetails =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/driver", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const getSubAdminDetails =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/subadmindetails", "GET", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }

  export const setSubAdminDetails =
  (success = (response: any) => { },
    failed = (error: any) => { }) => {
    getResult("/subadmin", "POST", null, (response) => {
      success(response);
    }, (error) => { failed(error); })
  }


