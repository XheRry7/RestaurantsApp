import { Shop } from "../models/shop";
import { IShops } from "../interfaces/shop";

export const shops = async () => {
    const shops = await Shop.find();
    return shops;
}

export const getSingleShop = async (id: string) => {
    const shop = await Shop.findById({ '_id': id })
    if (!shop) return 'no Shop found ';
    return shop;
}

export const addShop = async (shopData: object) => {
    const shop = new Shop(shopData);
    await shop.save()
        .then(res => console.log('RES', res))
        .catch(err => console.log('err', err))
    return shop;
}

export const update = async (id: any, data: IShops) => {
    const updated = await Shop.findOneAndUpdate({ '_id': id },
        {
            $set: {
                'shopName': data.shopName,
                'floorNumber': data.floorNumber,
                'shopNumber': data.shopNumber,
                'shopType': data.shopType,
                'Status': data.Status,
                'ownerPersonalInformation.cnic': data.ownerPersonalInformation.cnic,
                'ownerPersonalInformation.firstName': data.ownerPersonalInformation.firstName,
                'ownerPersonalInformation.lastName': data.ownerPersonalInformation.lastName,
                'ownerPersonalInformation.dob': data.ownerPersonalInformation.dob,
                'ownerPersonalInformation.Address': data.ownerPersonalInformation.Address
            },
        });
    return updated;
}

export const updateShopStatus = async (id: any, data: IShops) => {
    const updated = await Shop.findOneAndUpdate({ '_id': id },
        {
            $set: {
                'Status': data.Status,
            },
        });
    return updated;
}

export const deleteShop = async (id: any) => {
    const del = await Shop.findByIdAndDelete({ '_id': id });
    return del;
}

export const getUserShops = async (id: string) => {
    const shop = await Shop.find({ 'ownerPersonalInformation.OwnerId': id })
    if (!shop) return 'no Shop found ';
    return shop;
}

