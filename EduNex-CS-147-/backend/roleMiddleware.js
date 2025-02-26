module.exports = function authorizeRole(...allowedRoles) {
    return (req, res, next) => {
        console.log("User Role from Token:", req.user?.role);  // 🔍 Debugging
        console.log("Allowed Roles:", allowedRoles);

        if (!req.user || !allowedRoles.includes(req.user.role)) {
            console.log("Access Denied - Role Not Allowed");
            return res.status(403).json({ message: "Access Denied" });
        }
        
        console.log("Access Granted");
        next();
    };
};
