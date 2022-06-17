
import { getUser } from "../auth/auth"
import { CONTACTS, MYACCOUNT, TOPBLOGS, RATINGS, NEWS, HOME} from "./routes"

export const Routes: ISidebarButton[] = [

	{
		buttonText: 'Home',
		getPath: () => HOME
	},
	
	{
		buttonText: 'My Account',
		getPath: (id?:number) => {
			if(!id)
				id=getUser().id
			return `${MYACCOUNT}/${id}`
		}
	},
	{
		buttonText: 'Top Blogs',
		getPath: () =>  TOPBLOGS
	},
	{
		buttonText: 'Ratings',
		getPath: () =>  RATINGS
	},
	{
		buttonText: 'News',
		getPath: () =>  NEWS
	},
	{
		buttonText: 'Contacts',
		getPath: () =>  CONTACTS
	}
	
]
