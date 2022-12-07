import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import PersonInfo from "./info";
import { url } from "inspector";

const images = [
  {
    url: "/loki.jpg",
    title: "Lokesh Yerneni",
    width: "31%",
  },
  {
    url: "/benjamin.png",
    title: "Benjamin Wang",
    width: "31%",
  },
  {
    url: "/caleb.jpg",
    title: "Caleeb Lim",
    width: "31%",
  },
  {
    url: "https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2009/04/Kamran-Khan-June-2017.jpg?fit=750%2C750",
    title: "Kamran Khan",
    width: "31%",
  },
  {
    url: "/jack.jpg",
    title: "Jack Myrick",
    width: "31%",
  },
  {
    url: "/luke.jpg",
    title: "Luke Jagg",
    width: "31%",
  },
  {
    url: "/rees.jpg",
    title: "Rees Blatt",
    width: "31%",
  },
  {
    url: "/kanishk.jpg",
    title: "Kanishk",
    width: "31%",
  },
  {
    url: "/coffeeguy.jpg",
    title: "Person D",
    width: "31%",
  },
  {
    url: "/coffeeguy.jpg",
    title: "Person E",
    width: "31%",
  },
  {
    url: "/coffeeguy.jpg",
    title: "Person F",
    width: "31%",
  },
  {
    url: "/coffeeguy.jpg",
    title: "Person G",
    width: "31%",
  },
  {
    url: "/coffeeguy.jpg",
    title: "Person H",
    width: "31%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      borderBottom: "3px solid currentColor",
      bottom: 2,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 2,
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: 2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

type Props = {
  input: string;
};

type EmpDataType = 
  {
    employee_ID: number,
    employee_Rank: string,
    department_ID: string,
    site_ID: string,
    supervisor_ID: string,
  };

type AllDataType = 
  {
    personalID: number,
    age: number,
    phoneNumber: string,
    emailAddress: string,
    name: string,
  };

type AllEmpDataType = {
  employee_ID: number,
  employee_Rank: string,
  department_ID: string,
  site_ID: string,
  supervisor_ID: string,
  age: number,
  phoneNumber: string,
  emailAddress: string,
  name: string,
  transactionNumber: number,
  amount: number,
  payDate: string
};

export default function Cards<PROPS extends Props>({ input }: PROPS) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [empData, setEmpData] = React.useState<EmpDataType[]>([]);
  const [allData, setAllData] = React.useState<AllDataType[]>([]);
  const [allEmpData, setAllEmpData] = React.useState<AllEmpDataType[]>([]);
  const [selectedVal, setSelectedVal] = React.useState<AllEmpDataType>();

  const fetchEmp = async () => {
    const response = await fetch("http://localhost:6817/get/employees");
    const data = await response.json().then((result) => {
      setEmpData(result);
      return result;
    });

    return data;
  };

  const fetchAll = async () => {
    const response = await fetch("http://localhost:6817/get/citizensofearth");
    const data = await response.json().then((result) => {
      setAllData(result);
      return result;
    });

    return data;
  };

  React.useEffect(() => {
    const hi = async () => {
      const newAllData:AllDataType[] = await fetchAll();
      const newEmpData:EmpDataType[] = await fetchEmp();

      let temp: any[] = [];

      newAllData.map((elem) => {
        newEmpData.map((elem2) => {
          if (elem.personalID === elem2.employee_ID) {
            if (elem.personalID === 12340) {
              temp = [
                ...temp,
                {
                  employee_ID: elem2.employee_ID,
                  employee_Rank: elem2.employee_Rank,
                  department_ID: elem2.department_ID,
                  site_ID: elem2.site_ID,
                  supervisor_ID: elem2.supervisor_ID,
                  age: elem.age,
                  phoneNumber: elem.phoneNumber,
                  emailAddress: elem.emailAddress,
                  name: elem.name,
                  transactionNumber: 1,
                  amount: 500,
                  payDate: "2022-12-02",
                },
              ];
            } else {
              temp = [
                ...temp,
                {
                  employee_ID: elem2.employee_ID,
                  employee_Rank: elem2.employee_Rank,
                  department_ID: elem2.department_ID,
                  site_ID: elem2.site_ID,
                  supervisor_ID: elem2.supervisor_ID,
                  age: elem.age,
                  phoneNumber: elem.phoneNumber,
                  emailAddress: elem.emailAddress,
                  name: elem.name,
                  transactionNumber: 0,
                  amount: 0,
                  payDate: "Unavailable",
                },
              ];
            }
          }
        });
      });
      setAllEmpData([...temp])
    };
    hi();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  function findBackground(name: string) {
    images.map((image) => {
      if (image.title == name) {
        console.log(image.url);
        return image.url;
      }
    });

    return "/coffeeguy.jpg";
  }

  return (
    (
      <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: 300 }}>
        {
        allEmpData.filter((val) => (val.name.trim().toLowerCase().includes(input)))
          .map((val) => (
            <>
              <ImageButton
                focusRipple
                key={val.employee_ID}
                style={{
                  width: "31%",
                  margin: 10,
                }}
                onClick={() => {
                  setSelectedVal({
                    employee_ID: val.employee_ID,
                    employee_Rank: val.employee_Rank,
                    department_ID: val.department_ID,
                    site_ID: val.site_ID,
                    supervisor_ID: val.supervisor_ID,
                    age: val.age,
                    phoneNumber: val.phoneNumber,
                    emailAddress: val.emailAddress,
                    name: val.name,
                    transactionNumber: val.transactionNumber,
                    amount: val.amount,
                    payDate: val.payDate
                  });
                  setOpen(true);
                }}
              >
                <ImageSrc style={{backgroundImage: `url(${findBackground(val.name)})`}} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 2px)`,
                    }}
                  >
                    {val.name}
                  </Typography>
                </Image>
              </ImageButton>
              {open && (
                <PersonInfo
                  handleClose={handleClose}
                  view={open}
                  name={selectedVal ? selectedVal.name : "Unavaliable"}
                  phoneNumber={selectedVal ? selectedVal.phoneNumber : "Unavaliable"}
                  employee_ID= {selectedVal ? selectedVal.employee_ID : 0}
                  employee_Rank = {selectedVal ? selectedVal.employee_Rank : "Unavaliable"}
                  department_ID = {selectedVal ? selectedVal.department_ID : "Unavaliable"}
                  site_ID = {selectedVal ? selectedVal.site_ID : "Unavaliable"}
                  supervisor_ID = {selectedVal ? selectedVal.supervisor_ID : "Unavaliable"}
                  age = {selectedVal ? selectedVal.age : 0}
                  emailAddress = {selectedVal ? selectedVal.emailAddress : "Unavaliable"}
                  transaction = {selectedVal ? selectedVal.transactionNumber : 0}
                  amount = {selectedVal ? selectedVal.amount : 0}
                  payDate = {selectedVal ? selectedVal.payDate : "Unavailable"}
                ></PersonInfo>
              )}
            </>
          ))
        }
      </Box>
    )
  );
}
